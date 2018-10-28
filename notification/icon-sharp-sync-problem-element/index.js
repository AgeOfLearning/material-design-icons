import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSyncProblemElement
 * @class IconSharpSyncProblemElement
 * @extends {AoflElement}
 */
class IconSharpSyncProblemElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSyncProblemElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-sync-problem';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSyncProblemElement.is, IconSharpSyncProblemElement);

export default IconSharpSyncProblemElement;
