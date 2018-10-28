import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneThumbsUpDownElement
 * @class IconTwotoneThumbsUpDownElement
 * @extends {AoflElement}
 */
class IconTwotoneThumbsUpDownElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneThumbsUpDownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-thumbs-up-down';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneThumbsUpDownElement.is, IconTwotoneThumbsUpDownElement);

export default IconTwotoneThumbsUpDownElement;
