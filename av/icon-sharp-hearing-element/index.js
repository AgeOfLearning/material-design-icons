import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpHearingElement
 * @class IconSharpHearingElement
 * @extends {AoflElement}
 */
class IconSharpHearingElement extends AoflElement {
  /**
   * Creates an instance of IconSharpHearingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-hearing';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpHearingElement.is, IconSharpHearingElement);

export default IconSharpHearingElement;
