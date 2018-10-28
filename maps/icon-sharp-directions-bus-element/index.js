import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDirectionsBusElement
 * @class IconSharpDirectionsBusElement
 * @extends {AoflElement}
 */
class IconSharpDirectionsBusElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDirectionsBusElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-directions-bus';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDirectionsBusElement.is, IconSharpDirectionsBusElement);

export default IconSharpDirectionsBusElement;
