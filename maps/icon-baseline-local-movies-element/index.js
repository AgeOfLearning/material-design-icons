import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLocalMoviesElement
 * @class IconBaselineLocalMoviesElement
 * @extends {AoflElement}
 */
class IconBaselineLocalMoviesElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLocalMoviesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-local-movies';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLocalMoviesElement.is, IconBaselineLocalMoviesElement);

export default IconBaselineLocalMoviesElement;
