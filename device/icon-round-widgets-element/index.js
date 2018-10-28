import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundWidgetsElement
 * @class IconRoundWidgetsElement
 * @extends {AoflElement}
 */
class IconRoundWidgetsElement extends AoflElement {
  /**
   * Creates an instance of IconRoundWidgetsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-widgets';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundWidgetsElement.is, IconRoundWidgetsElement);

export default IconRoundWidgetsElement;
