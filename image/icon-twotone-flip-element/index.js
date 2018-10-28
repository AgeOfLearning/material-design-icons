import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFlipElement
 * @class IconTwotoneFlipElement
 * @extends {AoflElement}
 */
class IconTwotoneFlipElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFlipElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-flip';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFlipElement.is, IconTwotoneFlipElement);

export default IconTwotoneFlipElement;
