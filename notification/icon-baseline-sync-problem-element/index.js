import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSyncProblemElement
 * @class IconBaselineSyncProblemElement
 * @extends {AoflElement}
 */
class IconBaselineSyncProblemElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSyncProblemElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-sync-problem';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSyncProblemElement.is, IconBaselineSyncProblemElement);

export default IconBaselineSyncProblemElement;
