import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneHearingElement
 * @class IconTwotoneHearingElement
 * @extends {AoflElement}
 */
class IconTwotoneHearingElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneHearingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-hearing';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneHearingElement.is, IconTwotoneHearingElement);

export default IconTwotoneHearingElement;
