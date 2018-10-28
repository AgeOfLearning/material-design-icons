import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSyncDisabledElement
 * @class IconRoundSyncDisabledElement
 * @extends {AoflElement}
 */
class IconRoundSyncDisabledElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSyncDisabledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-sync-disabled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSyncDisabledElement.is, IconRoundSyncDisabledElement);

export default IconRoundSyncDisabledElement;
