import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPriorityHighElement
 * @class IconRoundPriorityHighElement
 * @extends {AoflElement}
 */
class IconRoundPriorityHighElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPriorityHighElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-priority-high';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPriorityHighElement.is, IconRoundPriorityHighElement);

export default IconRoundPriorityHighElement;
