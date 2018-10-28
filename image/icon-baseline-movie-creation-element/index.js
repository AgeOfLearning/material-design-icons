import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMovieCreationElement
 * @class IconBaselineMovieCreationElement
 * @extends {AoflElement}
 */
class IconBaselineMovieCreationElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMovieCreationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-movie-creation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMovieCreationElement.is, IconBaselineMovieCreationElement);

export default IconBaselineMovieCreationElement;
