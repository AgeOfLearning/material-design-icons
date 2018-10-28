import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPageviewElement
 * @class IconRoundPageviewElement
 * @extends {AoflElement}
 */
class IconRoundPageviewElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPageviewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-pageview';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPageviewElement.is, IconRoundPageviewElement);

export default IconRoundPageviewElement;
