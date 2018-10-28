import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSyncProblemElement
 * @class IconRoundSyncProblemElement
 * @extends {AoflElement}
 */
class IconRoundSyncProblemElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSyncProblemElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-sync-problem';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSyncProblemElement.is, IconRoundSyncProblemElement);

export default IconRoundSyncProblemElement;
