import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneExitToAppElement
 * @class IconTwotoneExitToAppElement
 * @extends {AoflElement}
 */
class IconTwotoneExitToAppElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneExitToAppElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-exit-to-app';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneExitToAppElement.is, IconTwotoneExitToAppElement);

export default IconTwotoneExitToAppElement;
