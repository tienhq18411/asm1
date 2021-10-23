var Account = require("../models/account.model");
var Admin = require("../models/admin.model");
var Staff = require("../models/staff.model");


module.exports = {
    //Account=============================================================
    viewAccount: async function (req, res) {
        res.render('admin/viewAccount', {
            accountAdmin: await Account.find({ role: 'admin' }),
            accountStaff: await Account.find({ role: 'staff' }),
            raccountTrainer: await Account.find({ role: 'trainer' })
        });
    },

    getCreateAccountAdmin: function (req, res) {
        res.render('admin/createAccountAdmin');
    },

    postCreateAccountAdmin: function (req, res) {
        console.log(req.body)
        const account = new Account(req.body);
        account.save();
        const admin = new Admin(req.body);
        admin.save();
        res.redirect('viewAccount');
    },

    getCreateAccountStaff: function (req, res) {
        res.render('admin/createAccountStaff');
    },

    postCreateAccountStaff: function (req, res) {
        const account = new Account(req.body);
        account.save();
        const staff = new Staff(req.body);
        staff.save();
        res.redirect('viewAccount');
    },





    getUpdateAccountAdmin: async function (req, res) {
        var username = req.params.username;
        var account = await Account.findOne({username: username})
        var admin = await Admin.findOne({username: username})

        res.render('admin/updateAccountAdmin', {
            account: account,
            admin: admin
        });
    },

    postUpdateAccountAdmin: async function (req, res) {
        var username = req.params.username;
        await Account.updateOne({username: username}, req.body)
        await Admin.updateOne({username: username}, req.body)
        res.redirect('/admin/viewAccount');

    },

    getUpdateAccountStaff: async function (req, res) {
        var username = req.params.username;
        var account = await Account.findOne({username: username})
        var staff = await Staff.findOne({username: username})

        res.render('admin/updateAccountStaff', {
            account: account,
            staff: staff
        });
    },

    postUpdateAccountStaff: async function (req, res) {
        var username = req.params.username;
        await Account.updateOne({username: username}, req.body)
        await Staff.updateOne({username: username}, req.body)
        res.redirect('/admin/viewAccount');

    },
    deleteAccount: async function (req, res) {
        var username = req.params.username;
        await Account.deleteOne({username: username});
        await Admin.deleteOne({username: username});
        await Staff.deleteOne({username: username});
        res.redirect('/admin/viewAccount');
    },

    //Home Page================================================================
    index: function (req, res) {
        res.render('admin/index');
    },
};