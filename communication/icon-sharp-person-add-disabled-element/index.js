import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPersonAddDisabledElement
 * @class IconSharpPersonAddDisabledElement
 * @extends {AoflElement}
 */
class IconSharpPersonAddDisabledElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPersonAddDisabledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-person-add-disabled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPersonAddDisabledElement.is, IconSharpPersonAddDisabledElement);

export default IconSharpPersonAddDisabledElement;
