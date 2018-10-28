import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePriorityHighElement
 * @class IconOutlinePriorityHighElement
 * @extends {AoflElement}
 */
class IconOutlinePriorityHighElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePriorityHighElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-priority-high';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePriorityHighElement.is, IconOutlinePriorityHighElement);

export default IconOutlinePriorityHighElement;
