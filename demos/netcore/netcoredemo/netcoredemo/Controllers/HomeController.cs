﻿using Fluid;
using Microsoft.AspNetCore.Mvc;
using netcoredemo.Models;
using netcoredemo.Models.Componencts;
using System.Diagnostics;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace netcoredemo.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}