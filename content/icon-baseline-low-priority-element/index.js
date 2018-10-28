import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLowPriorityElement
 * @class IconBaselineLowPriorityElement
 * @extends {AoflElement}
 */
class IconBaselineLowPriorityElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLowPriorityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-low-priority';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLowPriorityElement.is, IconBaselineLowPriorityElement);

export default IconBaselineLowPriorityElement;
