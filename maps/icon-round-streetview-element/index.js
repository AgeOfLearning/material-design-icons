import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundStreetviewElement
 * @class IconRoundStreetviewElement
 * @extends {AoflElement}
 */
class IconRoundStreetviewElement extends AoflElement {
  /**
   * Creates an instance of IconRoundStreetviewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-streetview';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundStreetviewElement.is, IconRoundStreetviewElement);

export default IconRoundStreetviewElement;
