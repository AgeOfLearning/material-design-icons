import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCastForEducationElement
 * @class IconSharpCastForEducationElement
 * @extends {AoflElement}
 */
class IconSharpCastForEducationElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCastForEducationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-cast-for-education';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCastForEducationElement.is, IconSharpCastForEducationElement);

export default IconSharpCastForEducationElement;
