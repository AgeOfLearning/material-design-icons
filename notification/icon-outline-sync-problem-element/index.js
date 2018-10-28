import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSyncProblemElement
 * @class IconOutlineSyncProblemElement
 * @extends {AoflElement}
 */
class IconOutlineSyncProblemElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSyncProblemElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-sync-problem';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSyncProblemElement.is, IconOutlineSyncProblemElement);

export default IconOutlineSyncProblemElement;
