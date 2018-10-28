import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTimeToLeaveElement
 * @class IconSharpTimeToLeaveElement
 * @extends {AoflElement}
 */
class IconSharpTimeToLeaveElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTimeToLeaveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-time-to-leave';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTimeToLeaveElement.is, IconSharpTimeToLeaveElement);

export default IconSharpTimeToLeaveElement;
