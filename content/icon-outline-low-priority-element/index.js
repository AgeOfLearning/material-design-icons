import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLowPriorityElement
 * @class IconOutlineLowPriorityElement
 * @extends {AoflElement}
 */
class IconOutlineLowPriorityElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLowPriorityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-low-priority';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLowPriorityElement.is, IconOutlineLowPriorityElement);

export default IconOutlineLowPriorityElement;
