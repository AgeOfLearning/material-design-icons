import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineHearingElement
 * @class IconOutlineHearingElement
 * @extends {AoflElement}
 */
class IconOutlineHearingElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineHearingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-hearing';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineHearingElement.is, IconOutlineHearingElement);

export default IconOutlineHearingElement;
