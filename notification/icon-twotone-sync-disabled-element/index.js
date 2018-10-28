import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSyncDisabledElement
 * @class IconTwotoneSyncDisabledElement
 * @extends {AoflElement}
 */
class IconTwotoneSyncDisabledElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSyncDisabledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-sync-disabled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSyncDisabledElement.is, IconTwotoneSyncDisabledElement);

export default IconTwotoneSyncDisabledElement;
