using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebappsIV_1920_be_AudreyB.Models
{
    public class Film
    {
        #region Properties
        public int Id { get; set; }

        [Required]
        public string Titel { get; set; }
        public DateTime Duur { get; set; }
        public String Genre { get; set; }
        public List<string> Acteurs { get; set; }
        public string Regiseur { get; set; }
        public List<string> Schrijvers { get; set; }
        // Film affiche  
        #endregion

        #region Contructors
        public Film()
        {

        }
        public Film(string titel, DateTime duur, string genre, List<String> acteurs, string regiseur, List<string> schrijvers)
        {
            this.Titel = titel;
            this.Duur = duur;
            this.Genre = genre;
            this.Acteurs = acteurs;
            this.Regiseur = regiseur;
            this.Schrijvers = schrijvers;

        }
        #endregion

        #region Methods

        #endregion
    }
}
