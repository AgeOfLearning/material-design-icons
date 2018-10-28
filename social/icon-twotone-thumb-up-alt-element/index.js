import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneThumbUpAltElement
 * @class IconTwotoneThumbUpAltElement
 * @extends {AoflElement}
 */
class IconTwotoneThumbUpAltElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneThumbUpAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-thumb-up-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneThumbUpAltElement.is, IconTwotoneThumbUpAltElement);

export default IconTwotoneThumbUpAltElement;
