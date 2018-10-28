import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLowPriorityElement
 * @class IconSharpLowPriorityElement
 * @extends {AoflElement}
 */
class IconSharpLowPriorityElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLowPriorityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-low-priority';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLowPriorityElement.is, IconSharpLowPriorityElement);

export default IconSharpLowPriorityElement;
