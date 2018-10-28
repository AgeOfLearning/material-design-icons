import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPriorityHighElement
 * @class IconSharpPriorityHighElement
 * @extends {AoflElement}
 */
class IconSharpPriorityHighElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPriorityHighElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-priority-high';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPriorityHighElement.is, IconSharpPriorityHighElement);

export default IconSharpPriorityHighElement;
