import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneThumbDownAltElement
 * @class IconTwotoneThumbDownAltElement
 * @extends {AoflElement}
 */
class IconTwotoneThumbDownAltElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneThumbDownAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-thumb-down-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneThumbDownAltElement.is, IconTwotoneThumbDownAltElement);

export default IconTwotoneThumbDownAltElement;
