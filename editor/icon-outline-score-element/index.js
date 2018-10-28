import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineScoreElement
 * @class IconOutlineScoreElement
 * @extends {AoflElement}
 */
class IconOutlineScoreElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineScoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-score';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineScoreElement.is, IconOutlineScoreElement);

export default IconOutlineScoreElement;
