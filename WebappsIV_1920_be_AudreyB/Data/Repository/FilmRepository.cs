using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebappsIV_1920_be_AudreyB.Models;

namespace WebappsIV_1920_be_AudreyB.Data.Repository
{
    public class FilmRepository : IFilmRepository
    {
        private readonly FilmContext _filmContext;
        private readonly DbSet<Film> _films;

        public FilmRepository(FilmContext dbFilmContext)
        {
            _filmContext = dbFilmContext;
            _films = dbFilmContext.Films;
        }

        public IEnumerable<Film> GetAllFilms()
        {
            return _films.ToList();
        }

        public Film GetByTitel(string titel)
        {
            throw new NotImplementedException();
        }

        public void SaveChanges()
        {
            _filmContext.SaveChanges();   
        }
    }
}
