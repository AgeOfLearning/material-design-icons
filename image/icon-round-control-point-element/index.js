import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundControlPointElement
 * @class IconRoundControlPointElement
 * @extends {AoflElement}
 */
class IconRoundControlPointElement extends AoflElement {
  /**
   * Creates an instance of IconRoundControlPointElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-control-point';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundControlPointElement.is, IconRoundControlPointElement);

export default IconRoundControlPointElement;
