import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePersonAddDisabledElement
 * @class IconOutlinePersonAddDisabledElement
 * @extends {AoflElement}
 */
class IconOutlinePersonAddDisabledElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePersonAddDisabledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-person-add-disabled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePersonAddDisabledElement.is, IconOutlinePersonAddDisabledElement);

export default IconOutlinePersonAddDisabledElement;
