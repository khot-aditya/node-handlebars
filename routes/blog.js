const express = require("express");
const path = require('path')
const blogs = require('../data/blogs')

const router = express.Router();


router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '../templates/index.html'))

    res.render('home')

})

router.get('/blog', (req, res) => {

    // blogs.forEach(element => {
    //     console.log(element.name)
    // });
    // res.sendFile(path.join(__dirname, '../templates/blogHome.html'))

    res.render('blogHome',{
        blogs: blogs
    })


})
router.get('/blogpost/:slug', (req, res) => {

    mBlog = blogs.filter((e) => {
        return e.slug == req.params.slug
    })

    res.render('blogPage',{
        name: mBlog[0].name,
        age: mBlog[0].age
    })


    // res.sendFile(path.join(__dirname, '../templates/blogPage.html'))

})


module.exports = router;