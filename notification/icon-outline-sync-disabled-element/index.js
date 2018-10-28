import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSyncDisabledElement
 * @class IconOutlineSyncDisabledElement
 * @extends {AoflElement}
 */
class IconOutlineSyncDisabledElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSyncDisabledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-sync-disabled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSyncDisabledElement.is, IconOutlineSyncDisabledElement);

export default IconOutlineSyncDisabledElement;
