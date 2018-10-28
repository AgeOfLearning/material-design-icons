import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMovieElement
 * @class IconBaselineMovieElement
 * @extends {AoflElement}
 */
class IconBaselineMovieElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMovieElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-movie';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMovieElement.is, IconBaselineMovieElement);

export default IconBaselineMovieElement;
