import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneEventElement
 * @class IconTwotoneEventElement
 * @extends {AoflElement}
 */
class IconTwotoneEventElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneEventElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-event';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneEventElement.is, IconTwotoneEventElement);

export default IconTwotoneEventElement;
