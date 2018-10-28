import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLowPriorityElement
 * @class IconTwotoneLowPriorityElement
 * @extends {AoflElement}
 */
class IconTwotoneLowPriorityElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLowPriorityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-low-priority';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLowPriorityElement.is, IconTwotoneLowPriorityElement);

export default IconTwotoneLowPriorityElement;
