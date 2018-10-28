import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSyncProblemElement
 * @class IconTwotoneSyncProblemElement
 * @extends {AoflElement}
 */
class IconTwotoneSyncProblemElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSyncProblemElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-sync-problem';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSyncProblemElement.is, IconTwotoneSyncProblemElement);

export default IconTwotoneSyncProblemElement;
