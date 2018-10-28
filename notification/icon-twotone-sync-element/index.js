import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSyncElement
 * @class IconTwotoneSyncElement
 * @extends {AoflElement}
 */
class IconTwotoneSyncElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSyncElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-sync';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSyncElement.is, IconTwotoneSyncElement);

export default IconTwotoneSyncElement;
