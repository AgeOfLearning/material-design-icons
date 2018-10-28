import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSystemUpdateElement
 * @class IconSharpSystemUpdateElement
 * @extends {AoflElement}
 */
class IconSharpSystemUpdateElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSystemUpdateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-system-update';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSystemUpdateElement.is, IconSharpSystemUpdateElement);

export default IconSharpSystemUpdateElement;
