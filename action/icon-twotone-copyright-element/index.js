import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCopyrightElement
 * @class IconTwotoneCopyrightElement
 * @extends {AoflElement}
 */
class IconTwotoneCopyrightElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCopyrightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-copyright';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCopyrightElement.is, IconTwotoneCopyrightElement);

export default IconTwotoneCopyrightElement;
