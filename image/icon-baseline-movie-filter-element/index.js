import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMovieFilterElement
 * @class IconBaselineMovieFilterElement
 * @extends {AoflElement}
 */
class IconBaselineMovieFilterElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMovieFilterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-movie-filter';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMovieFilterElement.is, IconBaselineMovieFilterElement);

export default IconBaselineMovieFilterElement;
