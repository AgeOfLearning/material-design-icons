import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCopyrightElement
 * @class IconOutlineCopyrightElement
 * @extends {AoflElement}
 */
class IconOutlineCopyrightElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCopyrightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-copyright';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCopyrightElement.is, IconOutlineCopyrightElement);

export default IconOutlineCopyrightElement;
