import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSyncDisabledElement
 * @class IconBaselineSyncDisabledElement
 * @extends {AoflElement}
 */
class IconBaselineSyncDisabledElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSyncDisabledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-sync-disabled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSyncDisabledElement.is, IconBaselineSyncDisabledElement);

export default IconBaselineSyncDisabledElement;
