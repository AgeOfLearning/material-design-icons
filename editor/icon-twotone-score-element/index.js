import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneScoreElement
 * @class IconTwotoneScoreElement
 * @extends {AoflElement}
 */
class IconTwotoneScoreElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneScoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-score';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneScoreElement.is, IconTwotoneScoreElement);

export default IconTwotoneScoreElement;
