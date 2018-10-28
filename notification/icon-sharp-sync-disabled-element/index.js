import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSyncDisabledElement
 * @class IconSharpSyncDisabledElement
 * @extends {AoflElement}
 */
class IconSharpSyncDisabledElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSyncDisabledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-sync-disabled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSyncDisabledElement.is, IconSharpSyncDisabledElement);

export default IconSharpSyncDisabledElement;
