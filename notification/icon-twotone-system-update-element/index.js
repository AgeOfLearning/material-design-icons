import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSystemUpdateElement
 * @class IconTwotoneSystemUpdateElement
 * @extends {AoflElement}
 */
class IconTwotoneSystemUpdateElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSystemUpdateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-system-update';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSystemUpdateElement.is, IconTwotoneSystemUpdateElement);

export default IconTwotoneSystemUpdateElement;
