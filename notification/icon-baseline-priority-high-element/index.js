import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePriorityHighElement
 * @class IconBaselinePriorityHighElement
 * @extends {AoflElement}
 */
class IconBaselinePriorityHighElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePriorityHighElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-priority-high';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePriorityHighElement.is, IconBaselinePriorityHighElement);

export default IconBaselinePriorityHighElement;
