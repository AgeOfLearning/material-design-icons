import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneThumbDownElement
 * @class IconTwotoneThumbDownElement
 * @extends {AoflElement}
 */
class IconTwotoneThumbDownElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneThumbDownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-thumb-down';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneThumbDownElement.is, IconTwotoneThumbDownElement);

export default IconTwotoneThumbDownElement;
